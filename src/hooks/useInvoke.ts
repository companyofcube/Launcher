import { invoke } from "@tauri-apps/api/core"
import { useEffect, useState } from "react"

interface FetchResult<T, V = Record<string, any>> {
  loading: boolean
  data: T | null
  fetchData: (params?: V) => Promise<void>
  refetchData: (params?: V) => Promise<void>
}

interface FetchProps<V> {
  command: string
  fetchOnLoad?: boolean
  params?: V
}

/* type Severity = "error" | "warning" | "info" | "success"

interface ServerError {
  severity: "Error" | "Warning" | "Info" | "Success"
  message: string
  error?: string
} */

/**
 * Un hook personnalisé pour effectuer des requêtes fetch.
 *
 * @template T Le type de la réponse attendue de la requête fetch.
 * @template V Le type de l'objet de paramètres à passer à la fonction fetchData.
 *
 * @param {string} name Le nom de la requête à effectuer.
 *
 * @returns {FetchResult<T, V>} Un objet contenant :
 * - `loading` : Un booléen indiquant si la requête est en cours.
 * - `data` : Les données renvoyées par la requête, ou null si la requête n'a pas encore été effectuée ou si une erreur s'est produite.
 * - `fetchData` : Une fonction pour effectuer la requête. Elle prend un objet de paramètres de type V et renvoie une promesse qui se résout lorsque la requête est terminée.
 * - `refetchData` : Une fonction pour charger plus de données et les fusionner avec les données existantes.
 *
 * @example
 * const { loading, data, fetchData, refetchData } = useFetch<Articles, ArticleParams>({
 *   name: "get_articles",
 * })
 *
 * // Chargement initial
 * useEffect(() => {
 *   fetchData({ limit: 10, offset: 0 })
 * }, [])
 *
 * // Charger plus d'articles
 * const loadMore = () => {
 *   refetchData({ limit: 10, offset: data.length })
 * }
 *
 * @author Etienne SAUVAGE
 */
export default function useInvoke<T, V = Record<string, any>>({
  command,
  fetchOnLoad,
  params,
}: FetchProps<V>): FetchResult<T, V> & {
  refetchData: (params?: V) => Promise<void>
} {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    if (fetchOnLoad) fetchData(params)
  }, [fetchOnLoad])

  async function fetchData(params?: V) {
    try {
      setLoading(true)

      const response = params
        ? await invoke<T>(command, params)
        : await invoke<T>(command)

      setData(response as T)
    } catch (error) {
      console.error(`Erreur lors de l'appel à ${command}:`, error)
    } finally {
      setLoading(false)
    }
  }

  async function refetchData(params?: V) {
    try {
      setLoading(true)

      const response = params
        ? await invoke<T>(command, params)
        : await invoke<T>(command)

      setData((prevData) => {
        if (!prevData) return response as T

        if (Array.isArray(prevData) && Array.isArray(response)) {
          return [...prevData, ...response] as T
        }

        if (typeof prevData === "object" && typeof response === "object") {
          return { ...prevData, ...response } as T
        }

        return response as T
      })
    } catch (error) {
      console.error(`Erreur lors de l'appel à ${command}:`, error)
    } finally {
      setLoading(false)
    }
  }

  return { loading, data, fetchData, refetchData }
}

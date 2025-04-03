export function snackbarAction(name: string, error: any) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`Function: ${name} | ${error}`)
  }
  return <button onClick={copyToClipboard}>Copier l'erreur</button>
}

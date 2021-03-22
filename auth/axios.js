// Dans ce fichier nous trouvons notre configuration globale d'axios
// L'URL de base de l'API est défini dans le fichier .env
import axios from 'axios'

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
})

export default api;
import URL_BACKEND_TOP from "../config/config";

function getAll() {
  return fetch(URL_BACKEND_TOP)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error("Não foi possível pegar os dados :(");
    });
}

function getAllVideos() {
  return fetch(URL_BACKEND_TOP)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error("Não foi possível pegar os dados :(");
  });
}

export default {
  getAllVideos,
  getAll
};
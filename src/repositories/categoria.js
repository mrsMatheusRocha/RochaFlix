function getAllVideos() {
  const URL = "https://my-json-server.typicode.com/mrsMatheusrocha/rochaflix/db";
  return fetch(URL)
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
};
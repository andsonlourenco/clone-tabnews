function status(request, response) {
  response.status(200).json({
    chave: "string de teste",
  });
}

export default status;

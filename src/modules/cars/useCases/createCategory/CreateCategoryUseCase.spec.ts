describe("Criar categoria", () => {
  it("Espero que 2 + 2 = 4", () => {
    const soma = 2 + 2;
    const resultado = 4;
    expect(soma).toBe(resultado);
  });

  it("Não espero que 2 + 2 = 5", () => {
    const soma = 2 + 2;
    const resultado = 5;

    expect(soma).not.toBe(resultado);
  });
});

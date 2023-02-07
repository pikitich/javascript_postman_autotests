// autotest for https://swapi.dev/api

pm.test("Есть Content-Type в хедере ответа?", () => {
  pm.response.to.have.header("Content-Type");
});

pm.test("Время ответа меньше 100ms", () => {
    pm.expect(pm.response.responseTime).to.be.below(100);
});

pm.test("Код ответа успешный?", () => {
  pm.expect(pm.response.code).to.be.oneOf([200,201,202]);
});

pm.test("В name объекта есть Obi-Wan Kenobi?", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.name).to.eql("Obi-Wan Kenobi");
});
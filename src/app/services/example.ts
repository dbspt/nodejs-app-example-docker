class ExampleService {
  public getInformation() {
    return [
      {
        name: 'Gendalf',
        age: 29,
        address: 'Rua Cardeal Arcoverde, 361',
        job: 'Backend Developer'
      },
      {
        name: 'Homer Simpson',
        age: 26,
        address: 'Avenida das Nações Unidas, 1083',
        job: 'Geography Teacher'
      }
    ]
  }
}

export default new ExampleService();
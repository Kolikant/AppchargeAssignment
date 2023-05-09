## Description

This is a Game offers' ordering service. It was designed with Nestjs and uses the controller - service - module design 
This implementation is with the focus on the purchacing flow
For scaling purposes a noSQL DB was used : mongoDB
We have 4 modules in this application

### User

Representing the user making the purchases with only the bare minimum of required information for purchase

### Offer

Representing special offers for sale with the field of 'availability' requiring an atomic decreasment with the read itself when a purchuse is made.

### Order

Representing orders made by the user. saving the offerId and userId

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod-docker
```

## Support

This project was done with the help of the boilerplate credited bellow

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

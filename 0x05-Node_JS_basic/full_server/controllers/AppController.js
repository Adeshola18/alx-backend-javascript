#!/usr/bin/node

class AppController {
  static getHomePage(request, response) {
    response.send(200, 'Hello Holberton School!');
  }
}

export default AppController;

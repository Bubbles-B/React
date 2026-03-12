import React, { Component } from 'react';
import Products from './Products';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>My First React App!</h1>
//         <Products />
//         <Products />
//         <Products />
//         <Products />
//       </div>
//     );
//   }
// }
// export default App;

class App extends Component {

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    const user = {
      firstName: 'Greg',
      lastName: 'Lim'
    };

    return (
      <div>
        <h1>Hello, {this.formatName(user)}</h1>
        <Products />
      </div>
    );
  }
}

export default App;
# Shopping Cart using Redux Toolkit

## [Live](https://shopping-cart-redux-toolkit.surge.sh/)
<img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/255640668_1056935065055497_9202001133485664357_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=92ysfwfauW0AX_Yx7-N&_nc_ht=scontent.fkhi2-2.fna&oh=4cd2df2725d8959c394e713d33b67b63&oe=6194AAD2" />

## Features
- The user can add items to cart.
- The user can delete items from cart.
- The user can reset cart

## Folder Structure
| File name 　　　　　　　　　　　　　　| Description 　　|
| :--  | :--         |
| `└── src ` (directory) | Contains the source files for the project |
| `　　└── components` (directory) | Contains two components. |
| `　　　　├── basket` (directory) | Showed the current products added by user, Showed buttons to reset cart and delete product. |
| `　　　　└── product` (directory) | Showed current products available and buttons to add them to cart. |
| `　　└── store` (directory) | Contains two files. |
| `　　　　├── index.ts` | Configured store, create reducers and exported them. |
| `　　　　└── store.ts` | Contains initial state. |
| `　　├── styles` (directory) | Contains styles. |
| `　　├── types` (directory) | Defined two interfaces and exported them |
| `　　├── App.tsx` | Displayed two components |
| `　　└── index.tsx` | Wrapped App component with store. |
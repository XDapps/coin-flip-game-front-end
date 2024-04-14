# Demo Coin Flip Game Front-end

This is the back-end of a demo coin flip game. It's written in Typescript and uses Express.js, MongoDB, and JWT for auth.

[Live Demo](https://coin-flip-game-7210e.web.app)

[Back End Repo](https://github.com/XDapps/coin-flip-game-back-end)

## Installation

1. Ensure the backend is setup and configured per the instructions in the back end ReadMe file.
2. In the src/api folder, update the endpoint url for your backend server, or leave the hardcoded value to interact with our back-end.
3. Navigate to your project directory and run:

```shell
npm install
```

### Run Locally

```shell
npm run dev
```

### Run Production

```shell
npm run build
```

### Game Rules

1. Users can wager up to their balance on a coin flip.
2. 3 consecutive wins awards the user a 3x payout.
3. 5 consecutive wins awards the user a 10x payout.
4. Streak resets after 5 wins.

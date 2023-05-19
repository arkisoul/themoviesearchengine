## The Movie Search Engine

**GitHub Repo** [link](https://github.com/arkisoul/themoviesearchengine.git)

## Fake Backend

install json-server and json-server-auth
`npm install json-server json-server-auth -D`

## Redux

- is based on Flux concept

**Terminology**

1. Store
2. Reducer(s) : rootReducer => JS pure functions
3. Action(s) : plain JS object { type: string, payload?: any }
   **Extended**
4. Middleware(s): redux-thunk, redux-saga, redux-observable
5. Action Creator: JS function that returns an Action (object)

```javascript
function increment() {
  return {type: 'increment'};
}
```
6. Thunk Function/async function
7. Thunk Function creator/async function creator

## Further References
- [React Native Maps](https://www.freecodecamp.org/news/how-to-integrate-maps-in-react-native-using-react-native-maps-5745490fe055/)
- React Native Push Notifications using [Firebase Package](https://rnfirebase.io), [Step by Step Guide](https://medium.com/@appdevguider/implementing-push-notifications-in-react-native-a-step-by-step-guide-6693c90078aa)
- RN Build Release automation CI/CD with Fastlane [here](https://docs.fastlane.tools/getting-started/cross-platform/react-native/)

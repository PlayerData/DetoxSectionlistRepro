Demonstrates an issue with Detox hanging when using `refreshing` on `SectionList`.

Although a `SectionList` has been used here, I believe this also affects `ScrollView`s
and `FlatList`s with a `refreshControl`.

```sh
yarn install
(cd ios && pod install)
yarn detox build
yarn detox test --debug-synchronization 5000
```

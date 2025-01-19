```javascript
// Incorrect usage of $inc operator with non-numeric fields
db.collection.updateOne({fieldName: "someValue"}, {$inc: {fieldName: 1}});
```
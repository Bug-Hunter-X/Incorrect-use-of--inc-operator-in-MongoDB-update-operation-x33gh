```javascript
// Correct usage of $inc operator, handling non-numeric cases
db.collection.findOne({fieldName: "someValue"}, (err, doc) => {
  if (err) {
    console.error(err);
  } else if (doc && typeof doc.fieldName === 'number') {
    db.collection.updateOne({fieldName: "someValue"}, {$inc: {fieldName: 1}});
  } else {
    // Handle the case where the field is not a number, e.g., setting a default value
    db.collection.updateOne({fieldName: "someValue"}, {$set: {fieldName: 1}});
  }
}); 
```
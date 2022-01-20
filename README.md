# <img align="left" width="44" alt="Anushka LinkedIn" src="https://img.icons8.com/color/48/000000/linkedin.png"/> LinkedIn Clone

This is a clone of the LinkedIn website. It was built using ReactJS, Redux and Firebase.

#### ✅ Link: https://linkedinclone-ac.web.app

## 📜 Table of contents

- [Overview](#overview)
  - [Introduction](#introduction)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## 📝 Overview

### Introduction

- This web app allows the user to register/ sign in with their email ids.
- User can then post messages on the feed.
- User can see others' posts in realtime on their feed.

### Screenshot

<img src="https://user-images.githubusercontent.com/59930625/150352048-ccbac895-c695-45c4-b95a-128a6bfff7e4.png">

## 💡 My process

### Built with

- ReactJS
- React Redux
- Firebase Authentication
- Firebase Firestore
- Material UI Icons
- React Flip Move Animation

### What I learned

#### 😎 Proud of this code:

**Bug fix**: `HeaderOption` was throwing an error when rendered on Login Page because `user` was `null`.

Replace this:

```js
{
  avatar && (
    <Avatar src={user.photoURL} className="headerOption__icon">
      {user.email[0]}
    </Avatar>
  );
}
```

With this: No avatar on Login Page. The icon space is blank.

```js
{
  avatar && user && (
    <Avatar src={user.photoURL} className="headerOption__icon">
      {user.email[0]}
    </Avatar>
  );
}
```

Or this: Default avatar (👤) on Login Page and user's profile image (👩‍🦰) on Feed.

```js
{
  avatar &&
    (!user ? (
      <Avatar className="headerOption__icon" /> // Login Page
    ) : (
      <Avatar src={user.photoURL} className="headerOption__icon">
        {user.email[0]}
      </Avatar>
    )); // Feed Page
}
```

## ⭐ Author

- GitHub - [@anushkachauhxn](https://github.com/anushkachauhxn)
- Behance - [@anushka_creates](https://www.behance.net/anushka_creates)

- LinkedIn - [@anushka-chauhan](https://www.linkedin.com/in/anushka-chauhan)
- Twitter - [@anushka_creates](https://twitter.com/anushka_creates)

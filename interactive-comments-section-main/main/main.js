const main = document.querySelector('.main');
// const container = document.querySelector('.container');

function loadDeleteModal() {
  fetch('deleteModal.html')
    .then(response => response.text())
    .then(data => {
      const modalContainer = document.getElementById('modal-container');
      if (modalContainer) {
        console.log('Modal container found');
        modalContainer.innerHTML = data;
          
          // After inserting the modal HTML, initialize the Bootstrap modal
        const modal = new bootstrap.Modal(document.querySelector('.modal'));
        modal.show();
        // modalContainer.innerHTML = data;
        
        // After inserting the modal HTML, initialize the Bootstrap modal
        /* const modal = new bootstrap.Modal(document.querySelector('.modal'));
        modal.show(); */ 
      } else {
        console.error('Modal container not found');
      }
    })
    .catch(error => console.error('Error loading modal:', error));
}

/* 
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        displayElements(data);
    })

function displayElements(data) {
    for(const country of data) {
        const div = document.createElement('div');
        const img__profile = document.createElement('img');
        const date__created = document.createElement('span');
        const div__reply = document.createElement('div');
        const div__score = document.createElement('div');
        const content = document.createElement('p');

        date__created.innerHTML = country.currentUser.username;
        console.log(date__created);
    }
} */



fetch('data.json')
  .then(response => response.json())
  .then(data => {
    displayElements(data);
    commentSection();


  })
  .catch(error => console.error('Error fetching data:', error));

function displayElements(data) {

  console.log(data.currentUser.username);

  for (const comment of data.comments) {
    const div__main = document.createElement('div');
    const div__content = document.createElement('div');
    const p__content = document.createElement('p');
    const img__profile = document.createElement('img');
    const date__created = document.createElement('span');
    const div__reply = document.createElement('div');
    const div__score = document.createElement('div');
    const span__header = document.createElement('span');
    const span__reply = document.createElement('span');
    const img__reply = document.createElement('img');
    const name = document.createElement('span');
    const div__comment = document.createElement('div');
    const p__header = document.createElement('p');
    const plusImg = document.createElement('img');
    const minusImg = document.createElement('img');
    const score = document.createElement('p');
    const content = document.createElement('p');
    const spanText = document.createElement('span');
    const r = document.createElement('div');

    div__main.className = 'main__div';
    img__profile.className = 'img__profile';
    img__profile.alt = 'profile image';

    date__created.className = 'date__created';
    span__reply.className = 'span__reply';
    img__reply.src = '../images/icon-reply.svg';
    name.className = 'name';

    // div__score 
    div__score.className = 'div__score';
    plusImg.src = '../images/icon-plus.svg';
    plusImg.className = 'plus__icon__image';
    score.innerHTML = comment.score;
    score.className = 'score';

    console.log('Comment.score: ' + comment.score);
    minusImg.src = '../images/icon-minus.svg';
    minusImg.className = 'minus__icon__image';
    div__score.appendChild(plusImg);
    div__score.appendChild(score);
    div__score.appendChild(minusImg);


    img__profile.src = comment.user.image.png;
    date__created.innerHTML = comment.createdAt;
    name.innerHTML = comment.user.username;
    p__content.innerHTML = comment.content;
    spanText.innerHTML = ' Reply';

    // adding delete icon
    const deleteIcon = document.createElement('img');
    deleteIcon.src = '../images/icon-delete.svg';
    deleteIcon.className = 'delete__icon';
    // div__score.appendChild(deleteIcon);


    /* 
    div__main.appendChild(div__scor);
    comment.replies.forEach(reply => {
    /* console.log("- Content:", reply.content);
    console.log("  Created At:", reply.createdAt); */
    //       });

    span__header.appendChild(img__profile);
    span__header.appendChild(name);
    span__header.appendChild(date__created);
    span__reply.appendChild(img__reply);
    span__reply.appendChild(spanText);
    span__header.appendChild(span__reply);
    
    r.appendChild(span__header);
    div__main.appendChild(r);
    div__content.appendChild(p__content);

    div__main.appendChild(div__content);
    div__main.appendChild(div__reply);

    // div__comment
    div__comment.className = 'div__comment';
    div__comment.appendChild(div__score);
    div__comment.appendChild(div__main);

    main.appendChild(div__comment);

    // reply comment section 
    comment.replies.forEach(reply => {

      const div__reply__main = document.createElement('div');
      const div__reply__content = document.createElement('div');
      const p__reply__content = document.createElement('p');
      const div__reply__score = document.createElement('div');
      const img__reply__profile = document.createElement('img');
      const date__reply__created = document.createElement('span');
      const div__reply__reply = document.createElement('div');
      const span__reply__header = document.createElement('span');
      const span__reply__reply = document.createElement('span');
      const img__reply__reply = document.createElement('img');
      const img__reply__reply__you = document.createElement('img');
      const div__comment__reply = document.createElement('div');
      const div__second__div__reply = document.createElement('div');
      const div__vertical__line__reply = document.createElement('div');
      const name__reply = document.createElement('span');
      const plusImg__reply = document.createElement('img');
      const minusImg__reply = document.createElement('img');
      const score__reply = document.createElement('p');
      const content__reply = document.createElement('p');
      const spanText__reply = document.createElement('span');
      const spanText__reply__you = document.createElement('span');
      const r__reply = document.createElement('div');
      const span__you = document.createElement('span');
      const span_delete_icon = document.createElement('span');


      div__reply__main.className = 'main__div main__div__reply';
      img__reply__profile.className = 'img__profile';
      img__reply__profile.alt = 'profile image';
      date__reply__created.className = 'date__created';
      div__reply__score.className = 'div__score';
      span__reply__reply.className = 'span__reply';
      img__reply__reply.src = '../images/icon-reply.svg';
      img__reply__reply__you.src = '../images/icon-edit.svg';
      name__reply.className = 'name';
      score__reply.className = 'score__reply';
      span__you.innerHTML = 'You';
      span__you.className = 'span__you';
      span_delete_icon.className = 'span__delete__icon';
      span_delete_icon.innerHTML = 'Delete';


      img__reply__profile.src = reply.user.image.png;
      date__reply__created.innerHTML = reply.createdAt;
      name__reply.innerHTML = reply.user.username;
      p__reply__content.innerHTML = reply.content;
      spanText__reply.innerHTML = ' Reply';
      spanText__reply__you.innerHTML = ' Edit';

      // vertical line 
      div__vertical__line__reply.className = 'div__vertical__line__reply';

      // div__score 
      div__reply__score.className = 'div__score__reply';
      plusImg__reply.src = '../images/icon-plus.svg';
      plusImg__reply.className = 'plus__icon__image';
      score__reply.innerHTML = reply.score;


      console.log('Comment.score: ' + reply.score);
      minusImg__reply.src = '../images/icon-minus.svg';
      minusImg__reply.className = 'minus__icon__image';
      div__reply__score.appendChild(plusImg);
      div__reply__score.appendChild(score__reply);
      div__reply__score.appendChild(minusImg);


      span__reply__header.appendChild(img__reply__profile);
      span__reply__header.appendChild(name__reply);
      
      if(reply.user.username === "juliusomo") {
        span__reply__reply.appendChild(deleteIcon);
        span__reply__reply.appendChild(span_delete_icon);
        span__reply__header.appendChild(span__you);
        span__reply__reply.appendChild(img__reply__reply__you);
        span__reply__reply.appendChild(spanText__reply__you);
      } else {
        span__reply__reply.appendChild(img__reply__reply);
        span__reply__reply.appendChild(spanText__reply);
      }

      span__reply__header.appendChild(date__reply__created);
      //span__reply__reply.appendChild(img__reply__reply); // reply image icon
      // span__reply__reply.appendChild(spanText__reply);
      // span__reply__reply.appendChild(deleteIcon);
      
      span__reply__header.appendChild(span__reply__reply);
      r__reply.appendChild(span__reply__header);
      div__reply__main.appendChild(r__reply);
      div__reply__content.appendChild(p__reply__content);
      div__reply__main.appendChild(div__reply__content);
      div__reply__main.appendChild(div__reply__reply);

      // div__comment
      div__comment__reply.className = 'div__comment';
      //div__comment__reply.appendChild(div__vertical__line__reply);
      div__comment__reply.appendChild(div__reply__score);
      div__comment__reply.appendChild(div__reply__main);

      main.appendChild(div__comment__reply);

      /* img__profile.src = reply.user.image.png;
      date__created.innerHTML = reply.createdAt;
      name.innerHTML = reply.user.username;
      p__content.innerHTML = reply.content;
      spanText.innerHTML = ' Reply';
      span__header.appendChild(img__profile);
      span__header.appendChild(name);
      span__header.appendChild(date__created); 

      div__reply.appendChild(span__header); */
      /* div__reply.appendChild(name);
      div__reply.appendChild(date__created); */
    });

  }



  /* data.comments.forEach(comment => {
      img__profile.src = comment.user.image.png;
      date__created.innerHTML = comment.createdAt;
      name.innerHTML = comment.user.username;
      console.log(comment.user.image.png);
      span__header.appendChild(img__profile);
      span__header.appendChild(name);
      span__header.appendChild(date__created);
      r.appendChild(span__header);
      div__main.appendChild(r);
      console.log("length", data.comments.length); */
  /* console.log("Content:", comment.content);
  console.log("Created At:", comment.createdAt);
  console.log("User Image (PNG):", comment.user.image.png);
  console.log("\nReplies:"); */



  //        comment.replies.forEach(reply => {
  /* console.log("- Content:", reply.content);
  console.log("  Created At:", reply.createdAt); */
  //       });
  //       main.appendChild(div__main);

  //  main.appendChild(content);
  console.log("\n");
  //   });

}

// build the comment section
function commentSection() {
  const div__main = document.createElement('div');
  const div__image = document.createElement('div');
  const div__textarea = document.createElement('div');
  const div__button = document.createElement('div');
  const textarea = document.createElement('textarea');
  const image = document.createElement('img');
  const button = document.createElement('button');

  // append the elements to the divs
  image.src = '../images/avatars/image-juliusomo.png';
  textarea.id = "myTextarea";
  textarea.rows = 5;
  textarea.cols = 85;
  textarea.placeholder = "Enter your text here...";
  div__image.appendChild(image);
  div__textarea.appendChild(textarea);
  div__button.appendChild(button);

  // style the comment section
  div__main.className = 'main__div__comment';
  textarea.className = 'textarea';
  // div__textarea.style.marginLeft = '50px';
  button.className = 'send__button';
  button.innerHTML = 'Send';
  button.style.padding = '15px';

  // append the elements to the main div
  div__main.appendChild(div__image);
  div__main.appendChild(div__textarea);
  div__main.appendChild(div__button);
  main.appendChild(div__main);


  document.querySelector('.span__delete__icon').addEventListener('click', function() {
    console.log('Delete icon clicked');
    loadDeleteModal();
  });
}


// append the modal after clincking the reply button
/* function appendModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  document.body.appendChild(modal);
}*/ 
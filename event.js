const Comment  = function(userName, text) {
    this.userName = userName;
    this.text = text;
  };
  
  Comment.prototype.render = function() {
    const listItem = document.createElement('li');
    listItem.innerHTML = '<img width="100px" src="img/' + this.userName + '.jpg"> <b>' + this.userName + ': </b><em>' + this.text + '</em>';
    return listItem;
  };
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Just setting up some variables for DOM access
  const chatList = document.getElementById('chat-list');
  const chatForm = document.getElementById('chat-form');
  const clearChatList = document.getElementById('clear-chat-list');
  let allComments = [];
  
  const renderAllComments = function() {
    chatList.innerHTML = '';
    for (let i = 0; i < allComments.length; i++) {
      chatList.appendChild(allComments[i].render());
    }
    // allComments.forEach(function(unicorn) {
    //   chatList.appendChild(unicorn.render());
    // });
  };
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++
  // This function handles the submission of comments
  function handleCommentSubmit(event) {
    console.log(event);
    event.preventDefault(); //gotta have it. prevents page reload
  
    if (!event.target.says.value || !event.target.firstname.value) {
      return alert('Fields cannot be empty!');
    }
  
    const commenter = event.target.firstname.value;
    let remark = event.target.says.value;
  
    if (commenter === 'Kevin') {
      remark = 'Welcome';
    }
  
    if (commenter === 'Birenderjit') {
      remark = remark.toUpperCase();
    }
  
    if (commenter === 'Jeremy') {
      remark = 'Heeeeeeeere\'s Jonny!!!';
    }
  
    const newComment = new Comment(commenter, remark);
  
    console.log('Comment by ' + event.target.firstname.value + ' at ' + Date());
  
    event.target.firstname.value = null;
    event.target.lastname.value = null;
  
    allComments.push(newComment);
    renderAllComments();
  }
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Event listener for comment submission form
  chatForm.addEventListener('submit', handleCommentSubmit);
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Event listener for the 'Clear all comments' button
  clearChatList.addEventListener('click', function() {
    chatList.innerHTML = '';
    console.log('You just cleared the chat list!');
    allComments = [];
  });

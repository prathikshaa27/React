const formFields = [
    {
      Name: 'Username',
      type: 'text',
      state: 'username',
      handler: 'handleUsernameChange',
    },
    {
      label: 'Password',
      type: 'password',
      state: 'password',
      handler: 'handlePasswordChange',
    },
    {
      label: 'Email',
      type: 'email',
      ref: 'emailRef',
    },
    {
      label: 'Upload File',
      type: 'file',
      ref: 'fileRef',
    },
  ];
  
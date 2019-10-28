// {
//   description: '8.1 searchUsers Предназначена для поиска пользователя по подстроке. ',
//   async: true,
//   reqData: {
//     id_query: 801,
//     action: 'searchUsers',
//     match: '333',
//   },
//   reqPars: [
//     {
//       pathValue: 'reqData.match',
//       readStorKey: 'user',
//       readStorePathValue: '',
//       defValue: 'up',
//     },
//   ],
//   respPars: [
//     {
//       // блок добавления ключа
//       addStorKey: {
//         StorKey: 'users',
//         SructureKeyValue: '{"a":[{"c":3},{"e":5}]}',
//         PathStorKey: 'users[0]',
//         PathRespValue: 'data[0].users[0].id',
//         DefValue: 'addStorKey',
//       }
//     },
//     {
//       // блок редактирования stor ключа  stor ключем
//       editStorKeyOfStorKey: {
//         StorKey: 'editStorKeyOfStorKey',
//         editPathValue: '',

//         readStorKey: '',
//         readStorPath: '',
//         readStorDefValue: 'editStorKeyOfStorKey',
//       }
//     },
//     {
//       // блок редактирования stor ключа respom
//       editStorKeyResp: {

//         StorKey: 'editStorKeyResp',
//         editPathValue: 'data.[0].users[0].id',

//         respPathValue: 'data.[0].users[0].id',
//         respDefValue: 'editStorKeyResp',

//       }
//     }
//   ]

// },


export const allcommands = [

  {
    description: '8.1 searchUsers Предназначена для поиска пользователя по подстроке. ',
    async: true,
    reqData: {
      id_query: 801,
      action: 'searchUsers',
      match: '333',
    },
    reqPars: [
      {
        pathValue: 'reqData.match',
        readStorKey: 'user',
        readStorePathValue: '',
        defValue: 'dmurk',
      },
    ],
    respPars: [
      {
        // блок добавления ключа
        addStorKey: {
          StorKey: '801 users',
          PathStorKey: 'users[0]',
          PathRespValue: 'data[0].users[0].id',
          DefValue: 'addStorKey',
        }
      },


    ]

  },

  {
    description: '8.2 getUsers Предназначена для получения детальной информации о пользователях по идентификаторам. ',
    async: true,
    reqData: {
      id_query: 802,
      action: 'getUsers',
      users: ''
    },
    reqPars: [
      {
        pathValue: 'reqData.users',
        readStorKey: '801 users',
        readStorePathValue: 'users',
        defValue: 'up2',
      },
    ],
    respPars: [
      {
        // блок добавления ключа
        addStorKey: {
          StorKey: '802 getUsers',
          PathStorKey: 'users',
          PathRespValue: 'data[0].users',
          DefValue: 'DEFgetContacts',
        }
      },
    ]
  },
  {
    description: '8.3 getContacts Предназначена для получения списка контактов текущего пользователя. ',
    async: true,
    reqData: {
      id_query: 803,
      action: 'getContacts',
    },
    reqPars: [

    ],
    respPars: [
      {
        // блок добавления ключа
        addStorKey: {
          StorKey: '803 getContacts',
          SructureKeyValue: '',
          PathStorKey: 'contacts',
          PathRespValue: 'data[0].contacts',
          DefValue: 'DEFgetContacts',
        }
      },
      {
        // блок добавления ключа
        addStorKey: {
          StorKey: '803 wUsersGroup',
          SructureKeyValue: '{"id":"", "parent": "", "isParent": false, "name": "Test" }',
          PathRespValue: 'data[0].contacts',
          PathStorKey: 'users',
          DefValue: 'DEFgetContacts',
        }
      },
    ]
  },
  {
    description: '8.4 setContacts Предназначена для замены списка контактов текущего пользователя.  ',
    async: true,
    reqData: {
      id_query: 804,
      action: 'setContacts',
      users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
    },
    reqPars: [

    ],
    respPars: [
      {
        // блок добавления ключа
        addStorKey: {
          StorKey: '804 setContacts',
          PathStorKey: 'status',
          PathRespValue: 'data[0].status',
          DefValue: 'DEFgetContacts',
        }
      },
    ]
  },
  {
    description: '8.5 addContact Добавляет идентификатор пользователя в основной список контактов текущего пользователя.  ',
    async: true,
    reqData: {
      id_query: 805,
      action: 'addContact',
      user: ''
    },
    reqPars: [
      {
        pathValue: 'reqData.user',
        readStorKey: '801 users',
        readStorePathValue: 'users[0]',
        defValue: 'addContact',
      },

    ],
    respPars: [
      {
        // блок добавления ключа
        addStorKey: {
          StorKey: '805 addContact',
          PathStorKey: 'status',
          PathRespValue: 'data[0].status',
          DefValue: 'addContact',
        }
      },
    ]
  },
  {
    description: 'Проверка 8.5 addContact с помощью 8.3 getContacts Предназначена для получения списка контактов текущего пользователя. ',
    async: true,
    reqData: {
      id_query: 806,
      action: 'getContacts',
    },
    reqPars: [

    ],
    respPars: [
      {
        // блок добавления ключа
        addStorKey: {
          StorKey: '806 getContacts',
          PathStorKey: 'contacts',
          PathRespValue: 'data[0].contacts',
          DefValue: 'DEFgetContacts',
        }
      },
    ]
  },

  {
    description: '8.6 removeContact Удаляет идентификатор пользователя из основного списка контактов текущего пользователя.   ',
    async: true,
    reqData: {
      id_query: 807,
      action: 'removeContact',
      user: ''
    },
    reqPars: [
      {
        pathValue: 'reqData.user',
        readStorKey: '801 users',
        readStorePathValue: 'users[0]',
        defValue: 'addContact',
      },

    ],
    respPars: [
      {
        // блок добавления ключа
        addStorKey: {
          StorKey: '807 removeContact',
          PathStorKey: 'status',
          PathRespValue: 'data[0].status',
          DefValue: 'DEFremoveContact',
        }
      },
    ]
  },
  {
    // tslint:disable-next-line: max-line-length
    description: 'Проверка 8.6 removeContact с помощью 8.3 getContacts Предназначена для получения списка контактов текущего пользователя. ',
    async: true,
    reqData: {
      id_query: 808,
      action: 'getContacts',
    },
    reqPars: [

    ],
    respPars: [
      {
        // блок добавления ключа
        addStorKey: {
          StorKey: '808 getContacts3',
          PathStorKey: 'contacts',
          PathRespValue: 'data[0].contacts',
          DefValue: 'DEFgetContacts',
        }
      },
    ]
  },
  {
    description: '8.7 enumUsersGroups Предназначена для получения доступных групп пользователей.    ',
    async: true,
    reqData: {
      id_query: 809,
      action: 'enumUsersGroups'

    },
    reqPars: [

    ],
    respPars: [
      {
        // блок добавления ключа
        addStorKey: {
          StorKey: '809 enumUsersGroups',
          PathStorKey: 'groups',
          PathRespValue: 'data[0].groups',
          DefValue: 'enumUsersGroups',
        }
      },
    ]
  },
  // {
  //   description: '8.8 getUsersGroup Предназначена для получения состава и описания группы пользователей.     ',
  //   async: true,
  //   reqData: {
  //     id_query: 808,
  //     action: 'getUsersGroup',
  //     users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
  //   },
  //   reqPars: [

  //   ],
  //   respPars: [
  //     {
  //       // блок добавления ключа
  //       addStorKey: {
  //         StorKey: 'enumUsersGroups',
  //         PathStorKey: 'groups',
  //         PathRespValue: 'data[0].groups',
  //         DefValue: 'enumUsersGroups',
  //       }
  //     },
  //   ]
  // },
  {
    description: '8.9 setUsersGroup Создает группу пользователей. Назначает состав группы пользователей.    ',
    async: true,
    reqData: {
      id_query: 810,
      action: 'setUsersGroup',
      group: ''
    },
    reqPars: [
      {
              pathValue: 'reqData.group',
              readStorKey: '803 wUsersGroup  ',
              readStorePathValue: '',
              defValue: 'up',
            },

    ],
    respPars: [
      {
        // блок добавления ключа
        addStorKey: {
          StorKey: '810 enumUsersGroups',
          PathStorKey: 'groups',
          PathRespValue: 'data[0].groups',
          DefValue: 'enumUsersGroups',
        }
      },
    ]
  },
  // {
  // tslint:disable-next-line: max-line-length
  //   description: '8.10 deleteUsersGroup Удаляет группу пользователей, все подчиненные группы пользователей и состав всех удаляемых групп. ',
  //   async: true,
  //   requestData: {
  //     id_query: 810,
  //     action: 'deleteUsersGroup',
  //     users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
  //   },
  //   response: {
  //     id_query: 810,
  //     status: true,
  //     groups: '  GUID (usersGroups)   ',
  //     ofStorage: {},
  //     inStorage: {},
  //   }
  // },
  // {
  //   description: '8.11 enumGroupSets Предназначена для получения именованных наборов пользователей и групп пользователей. ',
  //   async: true,
  //   reqData: {
  //     id_query: 811,
  //     action: 'enumGroupSets',
  //     users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
  //   },
  //   response: {
  //     id_query: 811,
  //     status: true,
  //     sets: 'array of wGroupSet',
  //     ofStorName: {},
  //     inStorName: {},
  //   }
  // },
  // {
  //   description: '8.12 getGroupSet Предназначена для получения именованных наборов пользователей и групп пользователей.  ',
  //   async: true,
  //   reqData: {
  //     id_query: 812,
  //     action: 'getGroupSet',
  //     set: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
  //   },
  //   response: {
  //     id_query: 812,
  //     status: true,
  //     set: 'array of wGroupSet',
  //     ofStorName: {},
  //     inStorName: {},
  //   }
  // },
  // {
  //   description: '8.13 setGroupSet Создает именованный набор пользователей и групп пользователей. Назначает состав набора.   ',
  //   async: true,
  //   reqData: {
  //     id_query: 813,
  //     action: 'setGroupSet',
  //     set: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
  //   },
  //   response: {
  //     id_query: 813,
  //     status: true,
  //     set: 'GUID (groupSets) ',
  //     ofStorName: {},
  //     inStorage: {},
  //   }
  // },
  // {
  //   // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: max-line-length
  //   description: '8.14 deleteGroupSet Удаляет именованный набор пользователей, все подчиненные именованные наборы пользователей и состав всех удаляемых именованных наборов. ',
  //   async: true,
  //   reqData: {
  //     id_query: 814,
  //     action: 'deleteGroupSet',
  //     set: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
  //   },
  //   response: {
  //     id_query: 814,
  //     status: true,
  //     ofStorName: {},
  //     inStorName: {},

  //   }
  // },


];

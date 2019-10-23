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
//       defValue: 'up',
//       readStorKey: 'user',
//       readStorePathValue: ''
//     },
//   ],
//   respPars: [
//     {
//       // блок добавления ключа
//       addStorKey: {
//         StorKey: 'users',
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
        defValue: 'up',
        readStorKey: 'user',
        readStorePathValue: ''
      },
    ],
    respPars: [
      {
        // блок добавления ключа
        addStorKey: {
          StorKey: 'users',
          PathStorKey: 'users[0]',
          PathRespValue: 'data[0].users[0].id',
          DefValue: 'addStorKey',
        }
      },

      {
        // блок редактирования stor ключа  stor ключем
        editStorKeyOfStorKey: {
          StorKey: 'users',
          editPathValue: 'users[3]',

          readStorKey: 'test',
          readStorPath: 'users',
          readStorDefValue: '333',
        }
      },
      {
        // блок редактирования stor ключа respom
        editStorKeyResp: {

          StorKey: 'users',
          editPathValue: 'users[2]',

          respPathValue: 'data.[0].users[0].id',
          respDefValue: 'editStorKeyResp',

        }
      }
    ]

  },

  // {
  //   description: '8.2 getUsers Предназначена для получения детальной информации о пользователях по идентификаторам. ',
  //   async: true,
  //   reqData: {
  //     id_query: 802,
  //     action: 'getUsers',
  //     users: ''
  //   },
  //   reqPars: [
  //     {
  //       pathValue: 'reqData.users',
  //       defValue: 'up2',
  //       readStorKey: 'user',
  //       readStorePathValue: 'data[0].users'
  //     },
  //   ],
  //   respPars: [
  //     {
  //       path: '.data[0].users[0].id',
  //       // блок проверки
  //       checkType: '',
  //       checkValue: '',
  //       checkStorKey: '',
  //       // блок добавления к значению
  //       addStorKey: 'users',
  //       addStorDefValue: '',
  //       // блок записи значения
  //       writeStorKey: 'users',
  //       writeDefStorValue: '',
  //     },
  //   ],
  // },
  // {
  //   description: '8.3 getContacts Предназначена для получения списка контактов текущего пользователя. ',
  //   async: true,
  //   reqData: {
  //     id_query: 803,
  //     action: 'getContacts',
  //   },
  //   response: {
  //     id_query: 803,
  //     status: true,
  //     contacts: 'wContacts',
  //     ofStorName: {},
  //     inStorName: {},
  //   }
  // },
  // {
  //   description: '8.4 setContacts Предназначена для замены списка контактов текущего пользователя.  ',
  //   async: true,
  //   reqData: {
  //     id_query: 804,
  //     action: 'setContacts',
  //     users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
  //   },
  //   response: {
  //     id_query: 804,
  //     status: true,
  //     ofStorName: {},
  //     inStorName: {},

  //   }
  // },
  // {
  //   description: '8.5 addContact Добавляет идентификатор пользователя в основной список контактов текущего пользователя.  ',
  //   async: true,
  //   reqData: {
  //     id_query: 805,
  //     action: 'addContact',
  //     users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
  //   },
  //   response: {
  //     id_query: 805,
  //     status: true,
  //     ofStorName: {},
  //     inStorage: {},

  //   }
  // },
  // {
  //   description: '8.6 removeContact Удаляет идентификатор пользователя из основного списка контактов текущего пользователя.   ',
  //   async: true,
  //   reqData: {
  //     id_query: 806,
  //     action: 'removeContact',
  //     users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
  //   },
  //   response: {
  //     id_query: 806,
  //     status: true,
  //     ofStorage: {},
  //     inStorage: {},

  //   }
  // },
  // {
  //   description: '8.7 enumUsersGroups Предназначена для получения доступных групп пользователей.    ',
  //   async: true,
  //   reqData: {
  //     id_query: 807,
  //     action: 'enumUsersGroups',
  //     users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
  //   },
  //   response: {
  //     id_query: 807,
  //     status: true,
  //     groups: 'array of wUsersGroup ',
  //     ofStorName: {},
  //     inStorName: {},
  //   }
  // },
  // {
  //   description: '8.8 getUsersGroup Предназначена для получения состава и описания группы пользователей.     ',
  //   async: true,
  //   reqData: {
  //     id_query: 808,
  //     action: 'getUsersGroup',
  //     users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
  //   },
  //   response: {
  //     id_query: 808,
  //     status: true,
  //     groups: ' wUsersGroup  ',
  //     ofStorName: {},
  //     inStorage: {},
  //   }
  // },
  // {
  //   description: '8.9 setUsersGroup Создает группу пользователей. Назначает состав группы пользователей.    ',
  //   async: true,
  //   reqData: {
  //     id_query: 809,
  //     action: 'setUsersGroup',
  //     users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
  //   },
  //   response: {
  //     id_query: 809,
  //     status: true,
  //     groups: '  GUID (usersGroups)   ',
  //     ofStorage: {},
  //     inStorage: {},
  //   }
  // },
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

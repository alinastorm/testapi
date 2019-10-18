export const allcommands = [

  {

    async: true,
    requestData: {
      id_query: 81,
      action: 'searchUsers',
      match: 'up'
    },
    response: {
      id_query: 81,
      status: true,
      users: ['up']
    }
  },
  {

    async: true,
    requestData: {
      id_query: 82,
      action: 'getUsers',
      users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
    },
    response: {
      id_query: 82,
      status: true,
      users: ['wUser']
    }
  },
  {

    async: true,
    requestData: {
      id_query: 83,
      action: 'getContacts',
    },
    response: {
      id_query: 83,
      status: true,
      contacts: 'wContacts'
    }
  },
  {

    async: true,
    requestData: {
      id_query: 84,
      action: 'setContacts',
      users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
    },
    response: {
      id_query: 84,
      status: true,

    }
  },
  {

    async: true,
    requestData: {
      id_query: 85,
      action: 'addContact',
      users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
    },
    response: {
      id_query: 85,
      status: true,

    }
  },
  {

    async: true,
    requestData: {
      id_query: 86,
      action: 'removeContact',
      users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
    },
    response: {
      id_query: 86,
      status: true,

    }
  },
  {

    async: true,
    requestData: {
      id_query: 87,
      action: 'enumUsersGroups',
      users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
    },
    response: {
      id_query: 87,
      status: true,
      groups: 'array of wUsersGroup '
    }
  },
  {

    async: true,
    requestData: {
      id_query: 88,
      action: 'getUsersGroup',
      users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
    },
    response: {
      id_query: 88,
      status: true,
      groups: ' wUsersGroup  '
    }
  },
  {
    // Создает группу пользователей. Назначает состав группы пользователей.
    async: true,
    requestData: {
      id_query: 89,
      action: 'setUsersGroup',
      users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
    },
    response: {
      id_query: 89,
      status: true,
      groups: '  GUID (usersGroups)   '
    }
  },
  {
    // Удаляет группу пользователей, все подчиненные группы пользователей и состав всех удаляемых групп.
    async: true,
    requestData: {
      id_query: 810,
      action: 'deleteUsersGroup',
      users: ['A065556E-BCBF-443A-AF7A-D0CAD8255BB0', '7CFA2285-0677-4A76-AB69-9606D9240854']
    },
    response: {
      id_query: 810,
      status: true,
      groups: '  GUID (usersGroups)   '
    }
  },




];

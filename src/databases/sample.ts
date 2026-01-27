export const ADMIN_ROLE = "SUPER ADMIN";
export const USER_ROLE = "NORMAL USER";

export const INIT_PERMISSIONS = [
  // ============ USER PERMISSIONS ============
  {
    "_id": "648ab415f4328bd3153ee211",
    "name": "Create User",
    "apiPath": "/api/v1/users",
    "method": "POST",
    "module": "USERS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee212",
    "name": "Get User by Id",
    "apiPath": "/api/v1/users/:id",
    "method": "GET",
    "module": "USERS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee213",
    "name": "Get Users with Pagination",
    "apiPath": "/api/v1/users",
    "method": "GET",
    "module": "USERS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee214",
    "name": "Update User",
    "apiPath": "/api/v1/users/:id",
    "method": "PATCH",
    "module": "USERS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee215",
    "name": "Delete User",
    "apiPath": "/api/v1/users/:id",
    "method": "DELETE",
    "module": "USERS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },

  // ============ COMPANY PERMISSIONS ============
  {
    "_id": "648ab415f4328bd3153ee216",
    "name": "Create Company",
    "apiPath": "/api/v1/companies",
    "method": "POST",
    "module": "COMPANIES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee217",
    "name": "Get Company by Id",
    "apiPath": "/api/v1/companies/:id",
    "method": "GET",
    "module": "COMPANIES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee218",
    "name": "Get Companies with Pagination",
    "apiPath": "/api/v1/companies",
    "method": "GET",
    "module": "COMPANIES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee219",
    "name": "Update Company",
    "apiPath": "/api/v1/companies/:id",
    "method": "PATCH",
    "module": "COMPANIES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee220",
    "name": "Delete Company",
    "apiPath": "/api/v1/companies/:id",
    "method": "DELETE",
    "module": "COMPANIES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },

  // ============ JOB PERMISSIONS ============
  {
    "_id": "648ab415f4328bd3153ee221",
    "name": "Create Job",
    "apiPath": "/api/v1/jobs",
    "method": "POST",
    "module": "JOBS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee222",
    "name": "Get Job by Id",
    "apiPath": "/api/v1/jobs/:id",
    "method": "GET",
    "module": "JOBS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee223",
    "name": "Get Jobs with Pagination",
    "apiPath": "/api/v1/jobs",
    "method": "GET",
    "module": "JOBS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee224",
    "name": "Update Job",
    "apiPath": "/api/v1/jobs/:id",
    "method": "PATCH",
    "module": "JOBS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee225",
    "name": "Delete Job",
    "apiPath": "/api/v1/jobs/:id",
    "method": "DELETE",
    "module": "JOBS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },

  // ============ RESUME PERMISSIONS ============
  {
    "_id": "648ab415f4328bd3153ee226",
    "name": "Create Resume",
    "apiPath": "/api/v1/resumes",
    "method": "POST",
    "module": "RESUMES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee227",
    "name": "Get Resume by Id",
    "apiPath": "/api/v1/resumes/:id",
    "method": "GET",
    "module": "RESUMES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee228",
    "name": "Get Resumes with Pagination",
    "apiPath": "/api/v1/resumes",
    "method": "GET",
    "module": "RESUMES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee229",
    "name": "Update Resume",
    "apiPath": "/api/v1/resumes/:id",
    "method": "PATCH",
    "module": "RESUMES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee230",
    "name": "Delete Resume",
    "apiPath": "/api/v1/resumes/:id",
    "method": "DELETE",
    "module": "RESUMES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },

  // ============ PERMISSION PERMISSIONS ============
  {
    "_id": "648ab415f4328bd3153ee231",
    "name": "Create Permission",
    "apiPath": "/api/v1/permissions",
    "method": "POST",
    "module": "PERMISSIONS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee232",
    "name": "Get Permission by Id",
    "apiPath": "/api/v1/permissions/:id",
    "method": "GET",
    "module": "PERMISSIONS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee233",
    "name": "Get Permissions with Pagination",
    "apiPath": "/api/v1/permissions",
    "method": "GET",
    "module": "PERMISSIONS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee234",
    "name": "Update Permission",
    "apiPath": "/api/v1/permissions/:id",
    "method": "PATCH",
    "module": "PERMISSIONS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee235",
    "name": "Delete Permission",
    "apiPath": "/api/v1/permissions/:id",
    "method": "DELETE",
    "module": "PERMISSIONS",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },

  // ============ ROLE PERMISSIONS ============
  {
    "_id": "648ab415f4328bd3153ee236",
    "name": "Create Role",
    "apiPath": "/api/v1/roles",
    "method": "POST",
    "module": "ROLES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee237",
    "name": "Get Role by Id",
    "apiPath": "/api/v1/roles/:id",
    "method": "GET",
    "module": "ROLES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee238",
    "name": "Get Roles with Pagination",
    "apiPath": "/api/v1/roles",
    "method": "GET",
    "module": "ROLES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee239",
    "name": "Update Role",
    "apiPath": "/api/v1/roles/:id",
    "method": "PATCH",
    "module": "ROLES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
    "_id": "648ab415f4328bd3153ee240",
    "name": "Delete Role",
    "apiPath": "/api/v1/roles/:id",
    "method": "DELETE",
    "module": "ROLES",
    "createdBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-06-15T06:47:49.369Z",
    "updatedAt": "2023-06-15T06:54:05.131Z",
    "__v": 0,
    "updatedBy": {
      "_id": "647b5108a8a243e8191855b5",
      "email": "admin@gmail.com"
    }
  },
  {
  "_id": "648ab415f4328bd3153ee241", // ID mới
  "name": "Get Account Info",
  "apiPath": "/api/v1/auth/account",
  "method": "GET",
  "module": "AUTH",
  "createdBy": {
    "_id": "647b5108a8a243e8191855b5",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2023-06-15T06:47:49.369Z",
  "updatedAt": "2023-06-15T06:54:05.131Z",
  "__v": 0
},
{
  "_id": "648ab415f4328bd31532ee24", // ID mới
  "name": "Get Mail",
  "apiPath": "/api/v1/mail",
  "method": "GET",
  "module": "MAIL",
  "createdBy": {
    "_id": "647b5108a8a243e8191855b5",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2023-06-15T06:47:49.369Z",
  "updatedAt": "2023-06-15T06:54:05.131Z",
  "__v": 0
}
];
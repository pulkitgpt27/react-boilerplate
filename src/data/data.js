// Arrow characters to use: ▼ ▶
export const statuses = ['Todo', 'In progress', 'Done']
export const subtasks = [11,12,13,14,15]

export const getIssues = async () => {
  return Promise.resolve({
    id:1,
    title: 'Lorem ipsum some title.',
    description:'Lorem ipsum some description. Lorem ipsum some description. Lorem ipsum some description.',
    status: 'In progress',
    subtasks: subtasks,
  })
}

export const updateStatus = async (id, status) => {
  console.log(id, status);
  return Promise.resolve({
    success: true  
  })
}

export const subtask = async (id) => {
  return Promise.resolve({
    id:1,
    title: 'Subtask title.',
    description:'Lorem ipsum some description. Lorem ipsum some description. Lorem ipsum some description.',
    status: 'Done',
  });
}
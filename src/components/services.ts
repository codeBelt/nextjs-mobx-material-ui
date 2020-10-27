const delay = (durationInMilliseconds: number = 1000): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, durationInMilliseconds));
};

export const getEmployeesRequest = async (): Promise<string[]> => {
  await delay();

  return ['employee 1', 'employee 2'];
};

export const getProjectRequest = async (): Promise<string[]> => {
  await delay();

  return ['project small', 'project big'];
};

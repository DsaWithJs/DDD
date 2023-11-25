type TaskStatus = {
  taskId: string;
  description: string;
  statusType: "pending" | "completed";
  dueDate?: string;
  completionDate?: string;
};

/*
 we only need dueDate when the statusType is pending 
 and we need completionDate when the statusType is completed.
*/

namespace ss {
  type TaskStatus = {
    taskId: string;
    description: string;
  } & ({ statusType: "pending"; dueDate: string } | { statusType: "completed"; completionDate: string });
}
/*
The conditional constraints ensure that a TaskStatus object cannot have
both a pending status and a completion status simultaneously. 
This maintains data integrity and prevents conflicting information about the task's status.
*/

namespace ss {
  type MaleProps = { gender: "male"; salary: number };
  type FemaleProps = { gender: "female"; weight: number };
  type Props = {
    name: string;
  } & (MaleProps | FemaleProps);

  /**
    const Todo = (props: Props) => {
    return <>hi</>;
   };
   <Todo gender="male" name="John" salary={50} />
   */
}

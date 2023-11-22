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

type TaskStatus2 = {
  taskId: string;
  description: string;
} & ({ statusType: "pending"; dueDate: string } | { statusType: "completed"; completionDate: string });

/*
The conditional constraints ensure that a TaskStatus object cannot have
both a pending status and a completion status simultaneously. 
This maintains data integrity and prevents conflicting information about the task's status.
*/

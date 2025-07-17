import User from"../module/usermodule.js";
import expenses from "../module/expensemodule.js";
export const expensecreate = async (req,res)=>{
    const {expenstitle} = req.body;
    const userId = req.user.id;
    if(!title || !userId){
        res.status(400).json({
            message : "title or userId is missing"
        });
        return;
    }

    const expenseCreate = await Task.create({
       expensetitle:title,
        createdBy : userId
    });
    if(!expenseCreate){
        res.status(400).json({
            message : "task creation failed in database"
        });
        return;
    }
    res.status(200).json({
        message : "task create successfull"
    })
}

export const expenseCreate = async(req,res)=>{
    const {description} = req.body;
    if( !description){
        res.status(400).json({
            message : "subtitle,description must be provided"
        });
        return;
    }
    let billimage = ""
    if(req.file){
        billimg = req.file.filename;
    }

    const userId = req.user.id;
    const {titleId} = req.params;
    if(!userId || !titleId){
        res.status(400).json({
            message : "userId and titleId must be provided"
        });
        return;
    }

    const expenseCreate = await expense.create({
        title : titleId,
        
        description : description,
        billimage: billimg
    });

    if(!expenseCreate){
        res.json({
            message : "Something fail during subTaskCreation"
        });
    return;
    }

    res.status(200).json({
        message : "subTask created"
    })
}

export const expenseEdit = async (req,res)=>{
    const {description} = req.body;
    const {expense} = req.params;
    if(!expenseId){
        res.status(400).json({
            message : "please provide subtaskID"
        });
        return;
    }

    const findexpense = await SubTask.findById(subtaskId);
    if(!findexpense){
        res.status(404).json({
            message : "subtask with this id is not found"
        });
        return;
    }
    const editexpense = await expense.findByIdAndUpdate({_id:subtaskId},{
        description : description
    });
    res.status(200).json({
         message : "subtask update successfully"
    })

}

export const deletexpense = async (req,res)=>{
    const {expenseId} = req.params;
    if(!expenseId){
        res.status(400).json({
            message : "please provide subtask id"
        });
        return;
    }

    const deletexpense= await expense.findByIdAndDelete({_id:expense});
    res.status(200).json({
        message : "data delete successfull"
    })
}
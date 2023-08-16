import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
    try {
        const result = await UserService.insertIntoDB(req.body)
        res.send({
            success: true,
            message: 'User created successfully',
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}

const insertOrUpdateProfile =async (req:Request, res: Response) => {
    try {
        const result = await UserService.insertOrUpdateProfile(req.body)
        res.send({
          success: true,
          message: "Profile create/updated successfully",
          data: result,
        });
    } catch (error) {
        res.send(error)
    }
}

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    res.send({
      success: true,
      message: "Users getting successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};


const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(parseInt(req.params.id));
    res.send({
      success: true,
      message: "User getting successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {insertIntoDB, insertOrUpdateProfile, getUsers, getSingleUser} 
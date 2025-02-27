import { NextResponse } from "next/server";
import User from "@/app/db/schema";
import dbConnect from "@/lib/mongodb";

interface RequestBodyType {
    _id:string,
    documentId:string,
    language: string
}

export async function POST(req : Request) {
    const {_id,documentId,language}:RequestBodyType = await req.json()
    await dbConnect();
    await User.updateOne(
        { _id: _id, "documents._id": documentId },
        {
            $set: {
                "documents.$.language": language,
             }
        }
    )
    const user = await User.find({_id: _id})
    return NextResponse.json({status: 'saved'})
  }
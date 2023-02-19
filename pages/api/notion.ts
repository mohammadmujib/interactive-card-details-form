import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NOTION_API_KEY
const notionDatabaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({auth:notionSecret})

type Row = {
    Name: {id :string, title:{text:{content: string}}[]}
    CollegeName: {id :string, rich_text:{text:{content: string}}[]}
    Branch:{id:string, select:{name:string} }
    Year:{id:string, select:{name:string} }
    Phone:{id:string,phone_number:string}
}

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
    if(!notionSecret || !notionDatabaseId) throw new Error('missing notion Secret or db-id ')
    // const query = await notion.databases.query({
    //     database_id:notionDatabaseId,
    // })
    // if (req.method !== 'POST') {
    // return res
    //   .status(405)
    //   .json({ message: `${req.method} requests are not allowed` });
    // }
     try {
        const {  cardholderName, phoneNumber, collegeName, branch, year, } = JSON.parse(req.body);
        await notion.pages.create({
        parent: {
            database_id: notionDatabaseId,
        },
        properties: {
            Name: {
            title: [
                {
                    text: {
                        content: cardholderName,
                    },
                },
            ],
        },
        Phone:{
            phone_number:phoneNumber
        },
       
        Branch: {
          select: {
            name: branch,
          },
        },
        Year: {
          select: {
            name: year,
          },
        },
       CollegeName: {
          rich_text: [
            {
              text: {
                content: collegeName,
                },
                },
            ],
            },
        },
        });
        res.status(201).json({ msg: 'Success' });
    } catch (error) {
        res.status(500).json({ msg: 'There was an error' });
    }
    
    // @ts-ignore
    // const rows = query.results.map((res) =>res.properties) as Row[]

    // const rowsStructured : rowsStructured =  rows.map((row) =>({
    //     name:row.Name.title[0].text.content,
    //     collegeName:row.CollegeName.rich_text[0].text.content,
    //     branch:row.Branch.select.name,
    //     year:row.Year.select.name,
    //     phoneNumber:row.Phone.phone_number

    // }))
    // // console.log(rows)
    // res.status(200).json( rowsStructured)
}
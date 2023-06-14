"use strict"
const {db}=require("../src/models/index")
const {app}=require("../src/server")
const supertest=require("supertest")
const request=supertest(app)

beforeAll(async () => {
    await db.sync();
});
describe("Testing Server food endpoint",()=>{
    test("Test Wrong path ",async ()=>{
       const result=await request.get("/food222");
       expect(result.status).toBe(404)
    })
    test("Test createFood ",async ()=>{
        const result=await request.post("/food").send({
            name: 'shawerma',
            brand: 'alreem'
        });
        expect(result.status).toBe(201);
     });
     test("Test getFood ",async ()=>{
        const result=await request.get("/food");
        expect(result.status).toBe(200)
     })
     test("Test getOneFood ",async ()=>{
        const result=await request.get("/food/1");
        expect(result.status).toBe(200)
     })
    test("Test updateFood ",async ()=>{
       const result=await request.put("/food/1")
       expect(result.status).toBe(201)
    })
    test("Test deleteFood ",async ()=>{
       const result=await request.delete("/food/1");
       expect(result.status).toBe(204)
    })

})


describe("Testing Server clothes endpoint",()=>{
    test("Test Wrong path ",async ()=>{
       const result=await request.get("/clothes222");
       expect(result.status).toBe(404)
    })
    test("Test createClothes ",async ()=>{
        const result=await request.post("/clothes").send({
            color: 'red',
            brand: 'lacoste'
        });
        expect(result.status).toBe(201);
     });
     test("Test getClothes ",async ()=>{
        const result=await request.get("/clothes");
        expect(result.status).toBe(200)
     })
     test("Test getOneClothes ",async ()=>{
        const result=await request.get("/clothes/1");
        expect(result.status).toBe(200)
     })
    test("Test updateClothes ",async ()=>{
       const result=await request.put("/clothes/1")
       expect(typeof result).toBe("object")
    })
    test("Test deleteClothes ",async ()=>{
       const result=await request.delete("/clothes/1");
       expect(result.status).toBe(204)
    })

})


describe("Testing Server author endpoint",()=>{
    test("Test Wrong path ",async ()=>{
       const result=await request.get("/author222");
       expect(result.status).toBe(404)
    })
    test("Test createAuthor ",async ()=>{
        const result=await request.post("/author").send({
            fullName: 'malek',
            address: 'amman'
        });
        expect(result.status).toBe(201);
     });
     test("Test getAuthor ",async ()=>{
        const result=await request.get("/author");
        expect(result.status).toBe(200)
     })
     test("Test getOneAuthor ",async ()=>{
        const result=await request.get("/author/1");
        expect(result.status).toBe(200)
     })
    test("Test updateAuthor ",async ()=>{
       const result=await request.put("/author/1")
       expect(typeof result).toBe("object")
    })
    test("Test getAuthorBooks ",async ()=>{
       const result=await request.put("/authorbooks/1")
       expect(typeof result).toBe("object")
    })
//Test deleteAuthor is the last one
})


describe("Testing Server book endpoint",()=>{
    test("Test Wrong path ",async ()=>{
       const result=await request.get("/book222");
       expect(result.status).toBe(404)
    })
    test("Test createBook ",async ()=>{
        const result=await request.post("/book").send({
            title: 'malek',
            version: 'amman',  
            author_id: 1  
        });
        expect(result.status).toBe(201);
     });
     test("Test getBook ",async ()=>{
        const result=await request.get("/book");
        expect(result.status).toBe(200)
     })
     test("Test getOneBook ",async ()=>{
        const result=await request.get("/book/1");
        expect(result.status).toBe(200)
     })
    test("Test updateBook ",async ()=>{
       const result=await request.put("/book/1");
       expect(typeof result).toBe("object")
    })
    test("Test deleteBook ",async ()=>{
       const result=await request.delete("/book/1");
       expect(result.status).toBe(204)
    })

})


describe("Testing Server author endpoint",()=>{
   test("Test deleteAuthor ",async ()=>{
      const result=await request.delete("/author/1");
      expect(result.status).toBe(204)
   })

})

afterAll(async () => {
    await db.drop();
});



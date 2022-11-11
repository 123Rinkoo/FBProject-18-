const Product=require('../model/product');

exports.insertUser =async (req,res,next)=>{
    const a=req.body.expense;
    const b=req.body.desc;
    const c=req.body.category;

    await Product.create({
        ExpenseAmount : a,
        Description: b,
        Category: c
    }).then(result=>{
        // res.render('views/index',{
        //     obj: a
        // })
        // console.log('its working');
        // res.json('/showing');
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.getUser= (req,res,next)=>{
     Product.findAll()
    .then(products=>{
        console.log("The length of the table", products.length);
        console.log(products[2]._previousDataValues);
        res.json(products);
        // res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.deleteUser=async (req,res,next)=>{
    const prodId=req.params.productId;
    await Product.findByPk(prodId)
    .then(product=>{
        return product.destroy();
    })
    .then((result)=>{
        console.log('deleted');
    })
    .catch(err=>{
        console.log(err);
    })
}


import Blogs from "../modules/blogSchema.js";
import expressAsyncHandler from "express-async-handler";

//desc    save blog into database
//method  post
//routes  /api/v1/blogs
export const createBlog = expressAsyncHandler(async (req, res) => {
  const { title, description, author, image } = req.body;

  console.log(req.body);

  const img_url = req.file.path;

  console.log("+------->", img_url);
  try {
    if (!req.body) {
      return res.status(400).json({
        success: true,
        message: "All fields are required!!",
      });
    }
    newBlog = {
      title,
      description,
      author,
      image,
    };
    const savedBlog = await Blogs.create({
      title,
      description,
      author,
      image: img_url,
    });
    if (!savedBlog) {
      return res.status(400).json({
        success: true,
        message: "Blog can't be saved !!",
      });
    }
    return res.status(200).json({
      success: true,
      data: savedBlog,
      message: "Blog saved successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Internal sever error",
    });
  }
});

//desc    get all blogs from database
//method  get
//routes  /api/v1/blogs
export const getAllBlogs = expressAsyncHandler(async (req, res) => {
  try {
    const allBlogs = await Blogs.find();
    if (!allBlogs) {
      return res.status(404).json("Database fail to retrive all data");
    }
    return res.status(200).json({
      success: true,
      data: allBlogs,
      message: "All Data are retrieved Successfully!!!!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Can't render All blogs",
    });
  }
});
//desc    get one record from database
//method  post
//routes  /api/v1/blogs
export const getOneBlog = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;

  const oneBlog = await Blogs.findById(id);
  if (!oneBlog) {
    return res.status(400).json({
      success: false,
      message: `This ${id} is not available in the database`,
    });
  }
  return res.status(200).json({
    success: true,
    data: oneBlog,
    message: "Blog saved successfully",
  });
});
//desc    delete data database
//method  delete
//routes  /api/v1/blogs
export const deleteBlog = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const blogToBeDeleted = await Blogs.findByIdAndDelete(id);
    if (!blogToBeDeleted) {
      return res.status(400).json({
        success: false,
        message: `This Id: ${id} is no longer fetched in database`,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Blog deleted Successfully",
    });
  } catch (error) {
    return res.status(500);
    throw new Error({
      message: "Internal server Error!!",
    });
  }
});

//desc    update data from database
//method  put
//routes  /api/v1/blogs
export const updateBlog = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const { title, description, author } = req.body;

  try {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Please provide content of body",
      });
    }
    const blogToBeUpdatedById = await Blogs.findById(id);
    if (!blogToBeUpdatedById) {
      return res.status(400).json({
        success: false,
        message: "Please provide matched ID",
      });
    }
    const blogToBeUpdated = await Blogs.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        next: true,
      }
    );
    if (!blogToBeUpdated) {
      return res.status(400);
      throw new Error("Blog Can't be Uptadated");
    }
    return res.status(200).json({
      success: true,
      data: blogToBeUpdated,
      message: "Blog Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Internal server Error!!!",
    });
  }
});

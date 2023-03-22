const Testimonial = require("../data_access/testimonialRepo");

const viewAllTestimonials = async () => {
    const fetchedTestimonials = await Testimonial.getAllTestimonials();

    return {
        status: 200,
        data: fetchedTestimonials,
    };
};

const createTestimonial = async (payload) => {
    const createdTestimonial = await Testimonial.addTestimonial(payload);

    return {
        status: 200,
        data: createdTestimonial.dataValues,
        message: "Testimonial added successfully",
    };
};

const modifyTestimonial = async (params, payload) => {
    let itemsToBeEdited = {};

    if (payload["testimonial_photo_url"]) itemsToBeEdited["testimonial_photo_url"] = payload["testimonial_photo_url"];
    if (payload["testimonial_post"]) itemsToBeEdited["testimonial_post"] = payload["testimonial_post"];
    if (payload["testimonial_description"]) itemsToBeEdited["testimonial_description"] = payload["testimonial_description"];

    const editedTestimonialResult = await Testimonial.editTestimonial(
        params.id,
        itemsToBeEdited
    );

    if (!editedTestimonialResult[0]) {
        return {
            status: 400,
            message: "Record not found",
        };
    }

    return {
        status: 200,
        message: "Testimonial edited successfully",
    };
};

const removeTestimonial = async (params) => {
    const deactivatedTestimonialResult = await Testimonial.deleteTestimonial(params.id);

    if (!deactivatedTestimonialResult[0]) {
        return {
            status: 400,
            message: "Record not found",
        };
    }

    return {
        status: 200,
        message: "Testimonial deactivated successfully",
    };
};

module.exports = {
    viewAllTestimonials,
    createTestimonial,
    modifyTestimonial,
    removeTestimonial,
};

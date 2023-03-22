const Testimonial = require("../models/testimonialModel.js");

const getAllTestimonials = async () => {
    const testimonials = await Testimonial.findAll();
    return testimonials;
};

const addTestimonial = async (data) => {
    const testimonial = await Testimonial.create({
        testimonial_photo_url: data.testimonial_photo_url,
        testimonial_name: data.testimonial_name,
        testimonial_post: data.testimonial_post,
        testimonial_description: data.testimonial_description,
    });

    return testimonial;
};

const editTestimonial = async (id, itemsToBeEdited) => {
    const testimonial = await Testimonial.update(itemsToBeEdited, {
        where: { id: id },
    });

    return testimonial;
};

const deleteTestimonial = async (id) => {
    /* For updating active status */
    const deactivatedTestimonial = await Testimonial.update(
        {
            testimonial_active: false,
        },
        {
            where: { id: id },
        }
    );

    /* For Deleting record, uncomment this */
    // await Testimonial.destroy({
    //     where: { id: id },
    // });

    return deactivatedTestimonial;
};

module.exports = {
    getAllTestimonials,
    addTestimonial,
    editTestimonial,
    deleteTestimonial,
};

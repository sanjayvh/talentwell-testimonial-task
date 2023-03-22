const router = require("express").Router();

const {
    viewAllTestimonials,
    createTestimonial,
    modifyTestimonial,
    removeTestimonial,
} = require("../services/testimonialServices");

router.get("/talentwell/api/v1/testimonial/get", async (req, res, next) => {
    const statusResponse = await viewAllTestimonials();
    res.send(statusResponse);
});

router.post("/talentwell/api/v1/testimonial/add", async (req, res, next) => {
    const requestBody = req.body;
    const statusResponse = await createTestimonial(requestBody);
    res.send(statusResponse);
});

router.put("/talentwell/api/v1/testimonial/edit/:id", async (req, res, next) => {
    const requestParams = req.params;
    const requestBody = req.body;
    const statusResponse = await modifyTestimonial(
        requestParams,
        requestBody,
    );
    res.send(statusResponse);
});

router.delete("/talentwell/api/v1/testimonial/delete/:id", async (req, res, next) => {
    const requestParams = req.params;
    const statusResponse = await removeTestimonial(requestParams);
    res.send(statusResponse);
});

module.exports = router;

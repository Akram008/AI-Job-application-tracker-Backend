import { document_loader } from "../utils/documentLoader.js";
import { AI_model } from "../utils/model.js";

const userInput = async (req, res) => {
    try {
        const { jobDesc } = req.body;
        const file = req.file;

        const document = await document_loader(file.path) 

        const llm_response = await AI_model(jobDesc, document) 

        return res.status(200).json({
            success: true,
            model_res: llm_response 
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export { userInput };
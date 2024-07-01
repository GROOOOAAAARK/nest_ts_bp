import Joi from 'joi';

const envSchema = Joi.object({
    APP_NAME: Joi.string().required().default('NestJS API Boilerplate'),
    APP_PORT: Joi.number().required().default(3000),
});

const envConfig = {
    APP_NAME: process.env.APP_NAME,
    APP_PORT: parseInt(process.env.APP_PORT),
};

const { error, value: CONFIG } = envSchema.validate(envConfig);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export { CONFIG };
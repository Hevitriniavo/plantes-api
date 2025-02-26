export const jwtConstants = {
    secret: process.env.JWT_SECRET || 'WhhLbosdJLwkFDSebUeezt7rU/YVFx8sZEnHVQtM6soz7gli+Udy/7Hx0sw8p3pbDxsnR2/FzxXXts0eUJ89iNjffqQw7oSNBCkw9EZrOGc=',
    expiresIn: process.env.JWT_EXPIRES || '3d',
};
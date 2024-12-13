import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import * as session from "express-session"
import * as passport from "passport"
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(
    session({
      secret: process.env.PASSPORT_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false }, // Set secure: true in production with HTTPS
    }),
  );
  
  app.use(passport.initialize())
  app.use(passport.session())
 
  await app.listen(3000)
}
bootstrap()
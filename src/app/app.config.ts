import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ShareButtons } from 'ngx-sharebuttons/buttons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { customShareButton, provideShareButtonsOptions } from 'ngx-sharebuttons'
import {
  faFacebookMessenger,
  faFacebookSquare,
  faRedditAlien,
  faTelegramPlane,
  faWhatsapp,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    FontAwesomeModule,
    provideShareButtonsOptions(
      customShareButton('facebook', {
        icon: faFacebookSquare,
      }),
      customShareButton('x', {
        icon: faXTwitter, // Assuming `faXTwitter` is the correct icon, replace if necessary
      }),
      customShareButton('reddit', {
        icon: faRedditAlien,
      }),
      customShareButton('telegram', {
        icon: faTelegramPlane,
      }),
      customShareButton('messenger', {
        icon: faFacebookMessenger,
      }),
      customShareButton('whatsapp', {
        icon: faWhatsapp,
      })
    ),
  ],
};

export class AppService {
  getHello(): { message: string; version: string } {
    return {
      message: 'Bienvenue sur l'API de gestion scolaire.',
      version: '1.0.0-beta',
    };
  }
}

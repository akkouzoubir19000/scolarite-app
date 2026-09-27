export class AuthService {
  getRoles() {
    return [
      'administrateur',
      'direction',
      'secretariat',
      'enseignant',
      'surveillant',
      'parent',
      'eleve',
    ];
  }

  login(email: string, password: string) {
    return {
      message: 'Connexion réussie',
      user: {
        email,
        role: 'administrateur',
      },
      token: 'demo-token-' + Buffer.from(`${email}:${password}`).toString('base64'),
    };
  }
}

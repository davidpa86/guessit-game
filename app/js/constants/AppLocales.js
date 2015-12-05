var locales = {
  'configuration' : {
    'es' : 'Configuración',
    'en' : 'Configuration'
  },
  'teams' : {
    'es' : 'Número de equipos:',
    'en' : 'Number of teams:'
  },
  'rounds' : {
    'es' : 'Número de rondas:',
    'en' : 'Number of rounds:'
  },
  'characters' : {
    'es' : 'Número de personajes:',
    'en' : 'Number of characters:'
  },
  'round' : {
    'es' : 'Round',
    'en' : 'Ronda'
  },
  'character' : {
    'es' : 'Personaje',
    'en' : 'Character'
  },
  'turn' : {
    'es' : 'Turno de %TEAM%',
    'en' : 'Turn of %TEAM%'
  },
  'done' : {
    'es' : 'Hecho',
    'en' : 'Done'
  },
  'next' : {
    'es' : 'Siguiente',
    'en' : 'Next'
  },
  'team' : {
    'es' : 'Equipo',
    'en' : 'Team'
  },
  'start' : {
    'es' : 'Empezar',
    'en' : 'Start'
  },
  'timeout' : {
    'es' : '¡Tiempo!',
    'en' : 'Timeout!'
  }
};

function getLocale(string,language)
{
  language = language || "en";
  if (locales[string] && locales[string][language])
  {
    return locales[string][language];
  }
  return '';
}

module.exports = getLocale;

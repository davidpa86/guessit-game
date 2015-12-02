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
  'character' : {
    'es' : 'Personaje',
    'en' : 'Character'
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

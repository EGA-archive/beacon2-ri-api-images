"""
The ``beacon`` package contains code to start a Beacon Rest API.
"""

__title__ = 'Beacon v2.0'
__version__ = VERSION = '2.0'
__author__ = 'CRG developers'
__license__ = 'Apache 2.0'
__copyright__ = 'Beacon 2.0 @ CRG, Barcelona'

import sys
if sys.version_info < (3, 7):
    print("beacon-python requires python 3.7 or higher", file=sys.stderr)
    sys.exit(1)

# Send warnings using the package warnings to the logging system
# The warnings are logged to a logger named 'py.warnings' with a severity of WARNING.
# See: https://docs.python.org/3/library/logging.html#integration-with-the-warnings-module
import logging
import warnings
logging.captureWarnings(True)
warnings.simplefilter("default")  # do not ignore Deprecation Warnings



from logging.config import dictConfig
from pathlib import Path
import yaml
import os

def load_logger():
    log_file =  Path(__file__).parent / "logger.yml"
    with open(log_file, 'r') as stream:
        dictConfig(yaml.safe_load(stream))


# Try to load the access levels yaml into a dict,
# from the envvar BEACON_ACCESS_LEVELS if defined,
# and [here]/access_levels.yml otherwise
def load_access_levels():
    filepath = Path(os.getenv('BEACON_ACCESS_LEVELS', Path(__file__).parent / "access_levels.yml"))
    if filepath.suffix not in ('.yaml', '.yml'):
        LOG.error("Unsupported format for %s", filepath)
        raise ValueError('Unsupported format for Access Levels')
    with open(filepath, 'r') as stream:
        return yaml.safe_load(stream)

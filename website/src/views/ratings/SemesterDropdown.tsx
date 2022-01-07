import { PureComponent } from 'react';
import Downshift, { ChildrenFunction } from 'downshift';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { AlertTriangle, Calendar, ChevronDown, Download, FileText, Image } from 'react-feather';

import { Semester } from 'types/modules';
import { SemTimetableConfig } from 'types/timetables';

import exportApi from 'apis/export';
import { downloadAsIcal, SUPPORTS_DOWNLOAD } from 'actions/export';
import Online from 'views/components/Online';
import Modal from 'views/components/Modal';
import ComponentMap from 'utils/ComponentMap';
import { Counter } from 'utils/react';
import { State as StoreState } from 'types/state';

import styles from './SemesterDropdown.scss';

type ExportAction = 'CALENDAR' | 'IMAGE' | 'PDF';

interface SemesterDropDownProps {
  value: string;
  dropDown: string[];
  onClick: (value: string) => void;
}

const SemesterDropdown = ({ value, dropDown, onClick }: SemesterDropDownProps) => {
  const renderDropdown: ChildrenFunction<ExportAction> = ({
    isOpen,
    getMenuProps,
    toggleMenu,
    highlightedIndex,
  }) => {
    const counter = new Counter();
    return (
      <div className={styles.semesterMenu}>
        <button
          ref={(r) => {
            ComponentMap.downloadButton = r;
          }}
          className={classnames(styles.toggle, 'btn btn-outline-primary btn-svg')}
          type="button"
          onClick={() => toggleMenu()}
        >
          {value}
          <ChevronDown className={classnames(styles.chevron, 'svg-small')} />
        </button>
        <div
          className={classnames('dropdown-menu', styles.dropdownMenu, { show: isOpen })}
          {...getMenuProps()}
        >
          {dropDown.map((semester) => (
            <button
              onClick={() => onClick(semester)}
              type="button"
              className={classnames('dropdown-item', {
                'dropdown-selected': counter.matches(highlightedIndex),
              })}
            >
              {semester}
            </button>
          ))}
        </div>
      </div>
    );
  };
  return <Downshift>{renderDropdown}</Downshift>;
};

export default SemesterDropdown;

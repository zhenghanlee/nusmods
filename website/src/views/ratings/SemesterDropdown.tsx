import Downshift, { ChildrenFunction } from 'downshift';
import classnames from 'classnames';
import { ChevronDown } from 'react-feather';
import ComponentMap from 'utils/ComponentMap';
import { Counter } from 'utils/react';
import { semCodeToText } from './utils';

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
          {semCodeToText(value)}
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
              {semCodeToText(semester)}
            </button>
          ))}
        </div>
      </div>
    );
  };
  return <Downshift>{renderDropdown}</Downshift>;
};

export default SemesterDropdown;
